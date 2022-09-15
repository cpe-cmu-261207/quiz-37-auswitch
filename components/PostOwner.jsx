import React from "react";
import Comment from "./Comment";


export default function PostOwner(props) {
  return <div className="vstack gap-3">
  <div className="d-flex align-items-center gap-3">
    <img
      src="/profileImages/me.jpg"
      width="48"
      height="48"
      className="rounded-circle"
      style={{ objectFit: "cover" }}
    />
    <span className="fw-semibold fs-5">Switch Charuekpoonpol 640610672</span>
  </div>
  <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>
  <div className="d-flex align-items-center gap-1">
    <img src="/like.svg" width={20}></img>
    <span className="text-muted">100 คน</span>
  </div>
  <hr className="m-0" />
  {
        props.reply.map((c) => < Comment
          name={c.username}
          img={c.userImagePath}
          text={c.commentText}
          like={c.likeNum}
          reply={c.replies}
        />)
      }
</div>
}
