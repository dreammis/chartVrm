import { useContext, LegacyRef, useEffect, useRef } from "react";
import { ViewerContext } from "../features/vrmViewer/viewerContext";
import { buildUrl, CDNUrl } from "@/utils/buildUrl";

export default function VrmViewer() {
  const { viewer } = useContext(ViewerContext);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      viewer.setup(canvas);

      // const vrm = localStorage.getItem("chatvrm_vrm") ?? "/firststar-hateno_v1.vrm";
      viewer.loadVrm(buildUrl("/firststar-hateno_v1.vrm"));
      // viewer.loadVrm(CDNUrl(vrm));

      function handleDragOver(event: DragEvent) {
        event.preventDefault();
      }

      // Drag and DropでVRMを差し替え
      function handleDrop(event: DragEvent) {
        event.preventDefault();
        const files = event.dataTransfer?.files;
        if (!files) {
          return;
        }
        const file = files[0];
        if (!file) {
          return;
        }
        const file_type = file.name.split(".").pop();
        if (file_type === "vrm") {
          const blob = new Blob([file], { type: "application/octet-stream" });
          const url = window.URL.createObjectURL(blob);
          viewer.loadVrm(url);
        }
      }

      canvas.addEventListener("dragover", handleDragOver);
      canvas.addEventListener("drop", handleDrop);
      return () => {
        canvas.removeEventListener("dragover", handleDragOver);
        canvas.removeEventListener("drop", handleDrop);
      };
    }
  }, [viewer]);

  return (
    <div className={"absolute left-0 top-0 -z-10 h-[100svh] w-screen"}>
      <canvas ref={canvasRef} className={"h-full w-full"}></canvas>
    </div>
  );
}
