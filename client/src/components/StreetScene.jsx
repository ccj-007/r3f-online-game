import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
export function StreetScene(props) {
    const { nodes, materials, scene } = useGLTF("/models/StreetScene.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        })
    })

    return (
        <primitive object={scene} {...props}></primitive>
        // <group {...props} dispose={null}>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube002.geometry}
        //         material={materials["Material.009"]}
        //         position={[-18.145, 1.221, 5.785]}
        //     />
        //     <group position={[-3.586, 4.45, 14.291]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube_1.geometry}
        //             material={materials["Material.002"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube_2.geometry}
        //             material={materials["Material.007"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube005.geometry}
        //         material={materials["Material.007"]}
        //         position={[-2.86, 0.1, 13.539]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube034.geometry}
        //         material={materials["Material.002"]}
        //         position={[0.794, 4.369, 20.907]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane.geometry}
        //         material={materials["Material.005"]}
        //         position={[12.308, 0, 2.942]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane001.geometry}
        //         material={materials["Material.012"]}
        //         position={[10.16, 0, 12.942]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane002.geometry}
        //         material={materials["Material.012"]}
        //         position={[-10.067, 0, 14.107]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane003.geometry}
        //         material={materials["Material.012"]}
        //         position={[-10.881, 0, 7.317]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane004.geometry}
        //         material={materials["Material.012"]}
        //         position={[5.158, 0.05, 8.066]}
        //         scale={1.248}
        //     />
        //     <group position={[7.173, 0, -6.922]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane005_1.geometry}
        //             material={materials["Material.012"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane005_2.geometry}
        //             material={materials["Material.013"]}
        //         />
        //     </group>
        //     <group position={[-10.116, 0, -9.834]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane006_1.geometry}
        //             material={materials["Material.012"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane006_2.geometry}
        //             material={materials["Material.013"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane007.geometry}
        //         material={materials["Material.012"]}
        //         position={[5.002, 0, -18.887]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle.geometry}
        //         material={materials["Material.010"]}
        //         position={[4.38, 0.082, 7.582]}
        //         rotation={[0, 0.079, 0]}
        //         scale={0.1}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath.geometry}
        //         material={materials["Material.010"]}
        //         position={[2.623, 5.39, 7.724]}
        //         rotation={[0, 0.079, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath001.geometry}
        //         material={materials["Material.010"]}
        //         position={[2.623, 3.218, 7.724]}
        //         rotation={[0, 0.079, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube009.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.182, 3.435, 7.73]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <group
        //         position={[-0.032, 3.645, 7.894]}
        //         rotation={[-Math.PI, 0, -Math.PI]}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane009_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane009_2.geometry}
        //             material={materials["Material.019"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube010.geometry}
        //         material={materials["Material.010"]}
        //         position={[-1.208, 3.581, 8.027]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube011.geometry}
        //         material={materials["Material.010"]}
        //         position={[4.364, 2.023, 7.44]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={[1.153, 1.449, 1.449]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube012.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.201, 3.435, 7.937]}
        //         rotation={[0, 0.079, 0]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <group
        //         position={[1.208, 3.788, 8.028]}
        //         rotation={[0, 0.079, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle004_1.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle004_2.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle004_3.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath003.geometry}
        //         material={materials["Material.010"]}
        //         position={[-7.403, 3.218, -2.037]}
        //         rotation={[0, 1.409, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube013.geometry}
        //         material={materials["Material.010"]}
        //         position={[-7.526, 3.435, -0.619]}
        //         rotation={[0, 1.409, 0]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <group
        //         position={[-7.828, 3.645, 0.73]}
        //         rotation={[0, 1.409, 0]}
        //         scale={[0.812, 1, 0.999]}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane010_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane010_2.geometry}
        //             material={materials["Material.019"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube014.geometry}
        //         material={materials["Material.010"]}
        //         position={[-8.021, 3.581, 1.742]}
        //         rotation={[0, 1.409, 0]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube016.geometry}
        //         material={nodes.Cube016.material}
        //         position={[-6.224, 0.45, 6.49]}
        //         rotation={[0, -1.241, 0]}
        //         scale={[0.056, 1, 0.056]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle009.geometry}
        //         material={materials["Material.010"]}
        //         position={[2.433, 0.082, -2.727]}
        //         rotation={[0, -0.151, 0]}
        //         scale={0.1}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath004.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.69, 5.39, -2.991]}
        //         rotation={[0, -0.151, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath005.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.69, 3.218, -2.991]}
        //         rotation={[0, -0.151, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube018.geometry}
        //         material={materials["Material.010"]}
        //         position={[-3.094, 3.581, -3.567]}
        //         rotation={[0, -0.151, 0]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube019.geometry}
        //         material={materials["Material.010"]}
        //         position={[2.42, 2.023, -2.616]}
        //         rotation={[0, -0.151, 0]}
        //         scale={[1.153, 1.449, 1.449]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle013.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.854, 0.082, -4.253]}
        //         rotation={[0, -0.151, 0]}
        //         scale={0.1}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle014.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.114, 4.669, -4.253]}
        //         rotation={[-0.151, 0, -Math.PI / 2]}
        //         scale={0.068}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle015.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.114, 3.995, -4.253]}
        //         rotation={[-0.151, 0, -Math.PI / 2]}
        //         scale={0.068}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane012.geometry}
        //         material={materials["Material.010"]}
        //         position={[-3.106, 4.293, -4.698]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane014.geometry}
        //         material={materials["Material.010"]}
        //         position={[-3.596, 4.013, -4.248]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane013.geometry}
        //         material={materials["Material.010"]}
        //         position={[-3.596, 4.013, -4.248]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane015.geometry}
        //         material={materials["Material.010"]}
        //         position={[-3.837, 4.293, -4.698]}
        //     />
        //     <group position={[-4.573, 4.333, -4.25]} scale={[4.985, 4.985, 54.977]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle016_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle016_2.geometry}
        //             material={materials.lighte}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle017.geometry}
        //         material={materials["Material.010"]}
        //         position={[-4.591, 4.325, -4.253]}
        //         rotation={[0, 0.151, Math.PI]}
        //         scale={[0.039, 0.02, 0.039]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle018.geometry}
        //         material={materials["Material.010"]}
        //         position={[-4.216, 4.413, -3.803]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle019.geometry}
        //         material={materials["Material.010"]}
        //         position={[-4.573, 4.333, -4.516]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle020.geometry}
        //         material={materials["Material.010"]}
        //         position={[-4.578, 4.325, -4.253]}
        //         rotation={[0.151, 0, Math.PI / 2]}
        //         scale={[0.055, 0.013, 0.055]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane016.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.846, 2.268, -4.147]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane017.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.846, 2.078, -4.147]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane018.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.846, 2.754, -4.147]}
        //         rotation={[0, 0, -Math.PI / 6]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane019.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.846, 2.738, -4.147]}
        //         rotation={[0, 0, Math.PI / 6]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane021.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.846, 2.738, -4.359]}
        //         rotation={[0, 0, Math.PI / 6]}
        //     />
        //     <group position={[0.859, 1.671, -4.25]} scale={[4.985, 4.985, 54.977]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle021_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle021_2.geometry}
        //             material={materials.lighte}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle022.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.216, 1.752, -3.803]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle023.geometry}
        //         material={materials["Material.010"]}
        //         position={[0.861, 1.667, -4.253]}
        //         rotation={[0.151, 0, Math.PI / 2]}
        //         scale={[0.085, 0.015, 0.085]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle024.geometry}
        //         material={materials["Material.020"]}
        //         position={[1.088, 0.088, -3.379]}
        //         rotation={[0, -0.166, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane022.geometry}
        //         material={materials["Material.020"]}
        //         position={[1.551, 1.075, -3.183]}
        //         rotation={[0, -0.166, 0]}
        //         scale={[0.358, 2.5, 1.977]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane023.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.392, 1.026, -3.22]}
        //         rotation={[0, -0.166, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane024.geometry}
        //         material={materials["Material.010"]}
        //         position={[-1.579, 0.581, -3.825]}
        //         rotation={[0, -0.166, 0]}
        //         scale={[0.833, 2.5, 2]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane025.geometry}
        //         material={materials["Material.010"]}
        //         position={[1.241, 1.075, -3.357]}
        //         rotation={[-Math.PI, 0.166, 0]}
        //         scale={[-0.366, -2.5, -14.565]}
        //     />
        //     <group
        //         position={[4.088, 0.338, -2.198]}
        //         rotation={[0, 0, -0.019]}
        //         scale={[0.25, 0.361, 0.25]}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle027_1.geometry}
        //             material={materials["Material.017"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle027_2.geometry}
        //             material={materials["Material.010"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane020.geometry}
        //         material={materials["Material.010"]}
        //         position={[4.854, 0.1, -2.112]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle028.geometry}
        //         material={materials["Material.017"]}
        //         position={[4.852, 0.3, -2.123]}
        //         scale={[0.25, 0.361, 0.25]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Plane026.geometry}
        //         material={materials["Material.010"]}
        //         position={[4.853, 1.048, -2.117]}
        //         scale={[0.335, 0.335, 0.116]}
        //     />
        //     <group position={[4.088, 0.1, -2.198]} scale={[0.25, 0.361, 0.25]}>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle029_1.geometry}
        //             material={materials["Material.017"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle029_2.geometry}
        //             material={materials["Material.010"]}
        //         />
        //     </group>
        //     <group
        //         position={[4.088, 0.197, -2.198]}
        //         rotation={[0, 0.384, 0]}
        //         scale={[0.25, 0.361, 0.25]}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle030.geometry}
        //             material={materials["Material.017"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle030_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //     </group>
        //     <group
        //         position={[5.502, 0.054, 10.511]}
        //         rotation={[-Math.PI, 0.827, -Math.PI]}
        //     >
        //         <group
        //             position={[-0.365, 0.633, 0.025]}
        //             rotation={[Math.PI / 2, 0, 0]}
        //             scale={[0.05, 0.073, 0.05]}
        //         >
        //             <mesh
        //                 castShadow
        //                 receiveShadow
        //                 geometry={nodes.Circle031.geometry}
        //                 material={materials["Material.010"]}
        //             />
        //             <mesh
        //                 castShadow
        //                 receiveShadow
        //                 geometry={nodes.Circle031_1.geometry}
        //                 material={materials.lighte}
        //             />
        //         </group>
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube020.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube021.geometry}
        //             material={materials["Material.021"]}
        //             position={[-0.639, 0.078, 0]}
        //             rotation={[Math.PI / 2, 1.332, -Math.PI / 2]}
        //             scale={[0.281, 0.083, 0.017]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube022.geometry}
        //             material={materials["Material.021"]}
        //             position={[-0.58, 0.244, 0.11]}
        //             rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        //             scale={[0.492, 0.083, 0.017]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube023.geometry}
        //             material={materials["Material.021"]}
        //             position={[0, 0.523, 0]}
        //             scale={[1, 0.083, 0.017]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.NurbsPath006.geometry}
        //             material={materials["Material.010"]}
        //             position={[0, 0.495, 0.024]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube024.geometry}
        //         material={materials["Material.006"]}
        //         position={[-7.232, 1.1, 9.619]}
        //         rotation={[-Math.PI, 1.257, -Math.PI]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube025.geometry}
        //         material={materials["fanc "]}
        //         position={[-8.917, 0.94, 11.473]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube026.geometry}
        //         material={materials["Material.018"]}
        //         position={[-13.769, 0.756, 5.004]}
        //         rotation={[-Math.PI, 0.143, -Math.PI]}
        //     />
        //     <group
        //         position={[6.427, 0.765, -0.262]}
        //         rotation={[0, -0.161, 0]}
        //         scale={0.807}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle036.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle036_1.geometry}
        //             material={materials["Material.011"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube003.geometry}
        //         material={materials["elemation-1"]}
        //         position={[12.349, 6.202, -19.454]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube028.geometry}
        //         material={materials["Material.003"]}
        //         position={[2.497, 6.202, -19.454]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube029.geometry}
        //         material={materials["Material.003"]}
        //         position={[-1.356, 1.721, -23.515]}
        //         rotation={[0, -Math.PI / 2, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube030.geometry}
        //         material={materials["elemation-1"]}
        //         position={[-1.431, 4.66, -16.97]}
        //         rotation={[Math.PI / 2, Math.PI / 2, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube031.geometry}
        //         material={materials["elemation-1"]}
        //         position={[-1.32, 8.209, -25.804]}
        //         rotation={[0, -Math.PI / 2, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube032.geometry}
        //         material={materials["Material.004"]}
        //         position={[2.497, 6.202, -19.454]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube004.geometry}
        //         material={materials["Material.008"]}
        //         position={[-14.96, 4.85, 13.184]}
        //         rotation={[0, -1.293, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube027.geometry}
        //         material={materials["Material.001"]}
        //         position={[-1.447, 1.695, -30.275]}
        //         rotation={[0, -Math.PI / 2, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube033.geometry}
        //         material={materials["Material.014"]}
        //         position={[19.209, 1.695, -16.963]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube001.geometry}
        //         material={materials["Material.008"]}
        //         position={[-23.565, 4.85, 15.637]}
        //         rotation={[0, -1.293, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube035.geometry}
        //         material={materials["Material.015"]}
        //         position={[19.026, 3.763, 12.175]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube036.geometry}
        //         material={materials["Material.015"]}
        //         position={[10.387, 3.763, 21.83]}
        //         rotation={[-Math.PI, 1.296, -Math.PI]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube007.geometry}
        //         material={materials["Material.016"]}
        //         position={[-12.26, 5.258, -13.976]}
        //         rotation={[0, 0.272, 0]}
        //         scale={4.331}
        //     />
        //     <group
        //         position={[4.356, 2.383, 7.351]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle026_1.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle026_2.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle026_3.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[-1.218, 3.917, 7.937]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle035_1.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle035_2.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle035_3.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[-3.114, 3.94, -3.48]}
        //         rotation={[0, -0.15, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle040.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle040_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle040_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[-7.436, 3.786, -0.604]}
        //         rotation={[0, 1.408, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle041.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle041_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle041_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[-7.932, 3.933, 1.753]}
        //         rotation={[0, 1.408, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle042.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle042_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle042_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[1.171, 3.796, 7.641]}
        //         rotation={[Math.PI, -0.079, Math.PI]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle043.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle043_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle043_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[2.407, 2.382, -2.525]}
        //         rotation={[0, -0.15, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle044.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle044_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle044_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[13.25, 0.837, -10.067]}
        //         rotation={[0, -1.57, 0]}
        //         scale={0.807}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle046.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle046_1.geometry}
        //             material={materials["Material.011"]}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Circle005.geometry}
        //         material={materials["Material.010"]}
        //         position={[-7.121, 0.082, -3.776]}
        //         rotation={[0, 1.409, 0]}
        //         scale={0.1}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.NurbsPath002.geometry}
        //         material={materials["Material.010"]}
        //         position={[-7.403, 5.39, -2.037]}
        //         rotation={[0, 1.409, 0]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube015.geometry}
        //         material={materials["Material.010"]}
        //         position={[-7.136, 2.023, -3.663]}
        //         rotation={[0, -0.162, 0]}
        //         scale={[1.153, 1.449, 1.449]}
        //     />
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube017.geometry}
        //         material={materials["Material.010"]}
        //         position={[-0.729, 3.435, -3.098]}
        //         rotation={[0, -0.151, 0]}
        //         scale={[1.154, 1.451, 1.451]}
        //     />
        //     <group
        //         position={[-2.081, 3.645, -3.386]}
        //         rotation={[0, -0.151, 0]}
        //         scale={[0.812, 1, 0.999]}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane011_1.geometry}
        //             material={materials["Material.010"]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Plane011_2.geometry}
        //             material={materials["Material.019"]}
        //         />
        //     </group>
        //     <group
        //         position={[-0.739, 3.796, -3.008]}
        //         rotation={[0, -0.15, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle039.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle039_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle039_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <group
        //         position={[-7.148, 2.38, -3.574]}
        //         rotation={[0, -0.15, 0]}
        //         scale={1.451}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle045.geometry}
        //             material={materials.green}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle045_1.geometry}
        //             material={materials.yello}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Circle045_2.geometry}
        //             material={materials.red}
        //         />
        //     </group>
        //     <mesh
        //         castShadow
        //         receiveShadow
        //         geometry={nodes.Cube008.geometry}
        //         material={materials["Material.016"]}
        //         position={[30.395, 5.258, -16.989]}
        //         scale={4.331}
        //     />
        //     <group
        //         position={[-4.338, 0.034, -6.885]}
        //         rotation={[Math.PI, -1.478, Math.PI]}
        //         scale={0.893}
        //     >
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.body_.geometry}
        //             material={materials["body "]}
        //             position={[0, 1.015, -2.561]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube037.geometry}
        //             material={materials["Railway track"]}
        //             position={[1.041, 0.114, 4.88]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube038.geometry}
        //             material={materials["Railway track"]}
        //             position={[1.041, 0.114, 26.402]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Cube039.geometry}
        //             material={materials["Railway track"]}
        //             position={[1.041, 0.114, -16.244]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes["details-_up_"].geometry}
        //             material={materials["details- up "]}
        //             position={[-0.282, 3.346, -1.697]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.details_left.geometry}
        //             material={materials.details_left}
        //             position={[0, 2.354, 0]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.door_and_window.geometry}
        //             material={materials["door and window"]}
        //             position={[0, 2.694, 0]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.fence.geometry}
        //             material={materials.fence}
        //             position={[1.375, 3.254, 2.317]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.Front_and_rear.geometry}
        //             material={materials["Front and rear"]}
        //             position={[0, 0.954, -2.547]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.lighte.geometry}
        //             material={materials["lighte.001"]}
        //             position={[0.788, 1.369, 5.985]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.ventilator.geometry}
        //             material={materials.ventilator}
        //             position={[-0.036, 4.304, -2.658]}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.wheel.geometry}
        //             material={materials.wheel}
        //             position={[0.885, 0.793, 2.486]}
        //             rotation={[-Math.PI / 2, 0, 0]}
        //             scale={1.142}
        //         />
        //         <mesh
        //             castShadow
        //             receiveShadow
        //             geometry={nodes.wheel002.geometry}
        //             material={materials.wheel}
        //             position={[0.885, 0.793, -8.04]}
        //             rotation={[-Math.PI / 2, 0, 0]}
        //             scale={1.142}
        //         />
        //     </group>
        // </group>
    );
}

useGLTF.preload("/models/StreetScene.glb");
