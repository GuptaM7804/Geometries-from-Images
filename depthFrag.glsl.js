export default `#version 300 es
precision highp float;

uniform sampler2D uSampler;

in vec2 vTexcoord;
out vec4 outColor;

void main() {
    vec4 texture  = texture(uSampler, vTexcoord);
    float depth = texture.r;
    outColor = vec4(vec3(depth),1);
}
`;