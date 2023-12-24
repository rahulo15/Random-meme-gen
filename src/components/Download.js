import React from "react";

export default function ImageDownloader(props) {
  const imageUrl = props.url;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "downloaded_image.png";
    link.click();
  };

  return (
    <div>
      <button onClick={handleDownload} className="download--button">
        Download Image
      </button>
    </div>
  );
}
