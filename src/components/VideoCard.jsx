import React from "react";
import { Link } from "react-router-dom";
import VideoLength from "./shared/VideoLength";
import {BsFillCheckCircleFill} from 'react-icons/bs'
const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
          <img
            src={video.thumbnails[0].url}
            className="h-full w-full object-cover"
            alt="Video thumbnail"
          />
          {video?.lengthSeconds && <VideoLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex text-white mt-3">
          <div className="flex items-start">
            <div className="h-9 w-9 rounded-full overflow-hidden flex">
              <img
                src={video?.author?.avatar[0]?.url}
                className="w-full h-full object-cover"
                alt="author"
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-[12px] font-semibold mt-2 text-white/[0.7]">
              {video.author.title}
              {video.author.badges[0].type === "OFFICIAL_ARTIST_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1"/>
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
