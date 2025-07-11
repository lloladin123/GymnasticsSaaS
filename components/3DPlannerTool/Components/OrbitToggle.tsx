import { useEffect } from "react";

const OrbitToggle: React.FC<{
  orbitRef: React.RefObject<any>;
  enabled: boolean;
}> = ({ orbitRef, enabled }) => {
  useEffect(() => {
    if (orbitRef.current) {
      orbitRef.current.enabled = enabled;
    }
  }, [enabled]);

  return null;
};

export default OrbitToggle;
