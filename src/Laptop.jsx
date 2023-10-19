import { useGLTF, Environment } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"; // Import the GLTF type

export default function Laptop() {
  const laptop = useGLTF<GLTF>(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Environment preset="rembrandt" />
      <primitive object={laptop.scene} />
    </>
  );
}
