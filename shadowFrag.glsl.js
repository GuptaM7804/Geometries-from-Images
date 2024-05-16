export default `#version 300 es
precision highp float;

uniform sampler2D uSampler;

in vec4 vColor;
in vec4 vLightSpacePos;
out vec4 outColor;

in vec3 vNormal ;
in vec3 vLightDir; 

float shadowCalculation(vec4 lightSpacePos) {
    vec3 projCoords =  lightSpacePos.xyz / lightSpacePos.w;
    projCoords = projCoords * 0.5 + 0.5; 

    float closestDepth = texture(uSampler, projCoords.xy).r;
    float currentDepth = projCoords.z-0.00056;
    float shadow = currentDepth > closestDepth  ? 1.0 : 0.0;  
    
    return shadow;
}

void main() {
    float shadow =  shadowCalculation(vLightSpacePos);
    outColor = vec4((vColor * (1.0-shadow)).rgb, 1.0);
}
`;