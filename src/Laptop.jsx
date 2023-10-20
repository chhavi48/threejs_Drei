import { useGLTF, Environment, PresentationControls, Html } from "@react-three/drei";
// import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"; // Import the GLTF type

export default function Laptop() {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <Environment preset="sunset" />
      <PresentationControls global polar={[-0.4,0.2]} azimuth={[-0.4,0.2]}>
        <primitive object={laptop.scene} position-y={-1.2} />
        <Html wrapperClass="laptop">
          <iframe src="https://chhavisrivastav.vercel.app/"/>
        </Html>
      </PresentationControls>
    </>
  );
}
