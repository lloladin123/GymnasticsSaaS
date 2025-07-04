import { useFrame } from "@react-three/fiber";
import React from "react";

const OrbitToggle: React.FC<{ orbitRef: React.RefObject<any> }> = ({
  orbitRef,
}) => {
  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.enabled = true;
    }
  });
  return null;
};

export default OrbitToggle;
