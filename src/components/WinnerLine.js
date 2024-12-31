import React, { useLayoutEffect, useRef } from 'react';
import * as THREE from "three";

function WinnerLine({ positions, positionIndices }) {
  const ref = useRef();

  const startPos = positions[positionIndices[0]];
  const endPos = positions[positionIndices[2]];

  useLayoutEffect(() => {
    const path = new THREE.LineCurve3(
      new THREE.Vector3(...startPos),
      new THREE.Vector3(...endPos)
    );
    const tubeGeometry = new THREE.TubeGeometry(path, 10, 0.1, 4, false);
    ref.current.geometry = tubeGeometry;
  }, [startPos, endPos]);

  return (
    <mesh ref={ref}>
      <meshBasicMaterial color="#f09819" />
    </mesh>
  );
}

export default React.memo(WinnerLine);