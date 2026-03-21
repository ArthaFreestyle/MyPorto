"use client";

import { useEffect, useRef } from 'react';

export default function LiquidText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    function compileShader(src: string, type: number) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(s));
      }
      return s;
    }

    const vertexShaderSource = `
attribute vec2 a_pos;
attribute vec2 a_uv;
varying vec2 v_uv;
void main(){
    v_uv = a_uv;
    gl_Position = vec4(a_pos,0.0,1.0);
}`;

    const fragmentShaderSource = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_text;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_hover;

float random(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}  
float noise(vec2 st){
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i+vec2(1.0,0.0));
    float c = random(i+vec2(0.0,1.0));
    float d = random(i+vec2(1.0,1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y;
}

void main(){
vec2 correctedUV = vec2(v_uv.x, 1.0 - v_uv.y);

float strength = smoothstep(0.2,1.0,correctedUV.y);
float n = noise(vec2(correctedUV.x*5.0,(correctedUV.y*2.0 - u_time*0.6)*2.0));
float melt = n*0.4*(correctedUV.y);

float dist = distance(correctedUV, u_mouse);
float hoverWave1 = sin(dist * 12.0 - u_time * 6.0) * 0.08 * u_hover * exp(-dist * 3.5);
float hoverWave2 = sin(dist * 20.0 - u_time * 10.0) * 0.04 * u_hover * exp(-dist * 5.0);
float hoverWave = hoverWave1 + hoverWave2;

vec2 hoverDistort = normalize(correctedUV - u_mouse) * hoverWave * (1.0 + sin(u_time * 2.0) * 0.1);

vec2 finalUV = vec2(
    correctedUV.x + melt*0.3 + hoverDistort.x, 
    correctedUV.y - melt*0.8 + hoverDistort.y
);

vec4 col = texture2D(u_text, finalUV);

if(col.a > 0.1){
    float glow = smoothstep(0.5,1.0,col.a);
    
    // Dominant Silver/Gray metallic base
    float metallic = 0.5 + 0.5 * sin(correctedUV.x * 12.0 - correctedUV.y * 5.0 + u_time * 1.5);
    vec3 baseGray = mix(vec3(0.4, 0.45, 0.5), vec3(0.85, 0.88, 0.92), metallic);

    // Oil Slick Color Palette
    vec3 col1 = vec3(0.15, 0.05, 0.5); // Biru tua / Indigo & Ungu
    vec3 col2 = vec3(0.95, 0.25, 0.1); // Merah / Oranye
    vec3 col3 = vec3(0.8, 1.0, 0.0);   // Kuning neon terang & Hijau
    vec3 col4 = vec3(0.95, 0.98, 1.0); // Putih / Silver

    // Smooth transition based on noise and coordinates
    float colorNoise = noise(vec2(correctedUV.x * 2.5 + u_time * 0.4, correctedUV.y * 3.0 - u_time * 0.2));
    float colorMix = fract(colorNoise + correctedUV.x * 0.8 + u_time * 0.15);
    
    vec3 rainbow;
    float m = colorMix * 4.0;
    if (m < 1.0) {
        rainbow = mix(col1, col2, smoothstep(0.0, 1.0, m));
    } else if (m < 2.0) {
        rainbow = mix(col2, col3, smoothstep(0.0, 1.0, m - 1.0));
    } else if (m < 3.0) {
        rainbow = mix(col3, col4, smoothstep(0.0, 1.0, m - 2.0));
    } else {
        rainbow = mix(col4, col1, smoothstep(0.0, 1.0, m - 3.0));
    }

    // Isolate oil slick to the edges/transitions of the noise
    float slickIntensity = smoothstep(0.5, 0.9, sin(colorNoise * 8.0 + u_time * 2.0));
    vec3 spectrumColor = mix(baseGray, rainbow, slickIntensity * 0.85);

    if(u_hover > 0.1){
        float hoverIntensity = 1.0 - smoothstep(0.0, 0.3, dist);
        float pulseEffect = 0.7 + 0.3 * sin(u_time * 4.0 + dist * 8.0);

        // Bright silver highlight for hover interaction
        vec3 brightSilver = vec3(1.0, 1.0, 1.0) * pulseEffect;
        // Deep purple/indigo for contrast
        vec3 deepIndigo = vec3(0.2, 0.0, 0.4) * pulseEffect;

        spectrumColor = mix(spectrumColor, mix(deepIndigo, brightSilver, 0.5 + 0.5 * sin(u_time * 2.0)), hoverIntensity * u_hover * 0.8);
        glow += hoverIntensity * u_hover * 0.8;
    }

    col.rgb = mix(col.rgb, spectrumColor, 0.65 * glow);

    if(u_hover > 0.1){
        float particles = noise(correctedUV * 15.0 + u_time * 2.0);

        if(particles > 0.85 && dist < 0.2){
            col.rgb += vec3(0.9, 1.0, 0.2) * (particles - 0.85) * 8.0 * u_hover; // Kuning neon particles
        }

        float sparkles = noise(correctedUV * 30.0 + u_time * 4.0);
        if(sparkles > 0.92 && dist < 0.15){
            col.rgb += vec3(0.95, 0.98, 1.0) * (sparkles - 0.92) * 6.0 * u_hover; // Putih/Silver particles
        }
    }
}

if(u_hover > 0.1){
    float ambientGlow = 1.0 - smoothstep(0.0, 0.4, dist);
    float auraEffect = sin(dist * 6.0 - u_time * 3.0) * 0.2 + 0.8;

    vec3 auraColor = vec3(
    0.25 + 0.1 * sin(u_time * 1.5), // Indigo glow
    0.05 + 0.05 * sin(u_time * 2.0 + 1.0),
    0.40 + 0.1 * sin(u_time * 1.2 + 2.0)
    );

    col.rgb += auraColor * ambientGlow * u_hover * auraEffect;

    float outerHalo = 1.0 - smoothstep(0.2, 0.5, dist);
    col.rgb += vec3(0.08, 0.09, 0.1) * outerHalo * u_hover * 0.3;
}

gl_FragColor = col;
}`;

    const vs = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const quad = new Float32Array([
      -1, -1, 0, 0,
      1, -1, 1, 0,
      -1,  1, 0, 1,
      1,  1, 1, 1
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const a_pos = gl.getAttribLocation(program, 'a_pos');
    const a_uv = gl.getAttribLocation(program, 'a_uv');

    gl.enableVertexAttribArray(a_pos);
    gl.vertexAttribPointer(a_pos, 2, gl.FLOAT, false, 16, 0);
    gl.enableVertexAttribArray(a_uv);
    gl.vertexAttribPointer(a_uv, 2, gl.FLOAT, false, 16, 8);

    const u_time = gl.getUniformLocation(program, 'u_time');
    const u_text = gl.getUniformLocation(program, 'u_text');
    const u_mouse = gl.getUniformLocation(program, 'u_mouse');
    const u_hover = gl.getUniformLocation(program, 'u_hover');

    const textCanvas = document.createElement('canvas');
    const tctx = textCanvas.getContext('2d')!;
    textCanvas.width = 1000;
    textCanvas.height = 1000;

    const drawText = () => {
        tctx.clearRect(0, 0, textCanvas.width, textCanvas.height);
        tctx.fillStyle = '#fff';
        tctx.font = '900 180px "Nunito", "Helvetica Neue", sans-serif';
        tctx.textAlign = 'center';
        tctx.textBaseline = 'middle';
        tctx.fillText('Performance', textCanvas.width / 2, textCanvas.height / 2 - 90);
        tctx.fillText('Strict', textCanvas.width / 2, textCanvas.height / 2 + 90);
    };

    // Initial draw (with fallback font if Nunito not ready)
    drawText();

    const textTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);

    // Wait for Nunito to load, then redraw to fix font
    if (document.fonts) {
        document.fonts.load('900 130px "Nunito"').then(() => {
            drawText();
            gl.bindTexture(gl.TEXTURE_2D, textTex);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCanvas);
        });
    }

    let hoverValue = 0;
    const hoverSpeed = 0.05;
    let animationFrameId: number;

    function draw(t: number) {
      if (isHovering && hoverValue < 1.0) {
        hoverValue = Math.min(1.0, hoverValue + hoverSpeed);
      } else if (!isHovering && hoverValue > 0.0) {
        hoverValue = Math.max(0.0, hoverValue - hoverSpeed);
      }

      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.useProgram(program);

      gl!.uniform1f(u_time, t * 0.001);
      gl!.uniform2f(u_mouse, mouseX, mouseY);
      gl!.uniform1f(u_hover, hoverValue);

      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, textTex);
      gl!.uniform1i(u_text, 0);

      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(draw);
    }
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
      gl.deleteTexture(textTex);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width="1000" 
      height="1000" 
      className="w-full max-w-full h-auto block cursor-pointer transition-transform duration-300 hover:scale-[1.15]"
    />
  );
}
