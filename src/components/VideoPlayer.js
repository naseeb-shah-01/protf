import React from "react";
import { Modal } from "@mui/material";

function VideoModal({ open, onClose }) {
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          width: "1280px",
          margin: "auto",
          height: "720px",
        }}
        sx={{
          display: { xs: "none", lg: "block", md: "block", sm: "block" },
        }}
      >
        <iframe
          style={{
            width: "1280px",
            margin: "auto",
            height: "720px",
            "@media (max-width: 480px)": {
              width: "326px",
              height: "183.38px", // Maintain the aspect ratio
            },
          }}
          src="https://www.youtube.com/embed/CFBEU0GYac8?si=tfe3MUvH6xgSHaLF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
      <Modal
        open={open}
        onClose={() => onClose()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        style={{
          margin: "auto",
          width: "326px",
          height: "183.38px", // Maintain the aspect ratio
        }}
        sx={{
          display: { xs: "block", lg: "none", md: "none", sm: "none" },
        }}
      >
        <iframe
          style={{
            width: "1280px",
            margin: "auto",
            height: "720px",

            width: "326px",
            height: "183.38px", // Maintain the aspect ratio
          }}
          src="https://www.youtube.com/embed/CFBEU0GYac8?si=tfe3MUvH6xgSHaLF"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Modal>
    </>
  );
}

export default VideoModal;
