
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home()
{
	const me = [{
		username: "Switch Charuekpoonpol 640610672",
		userImagePath: "/profileImages/me.jpg",
		postText: "อยากกินขนมจีนน้ำเงี้ยว #261207",
		likeNum: 888,
		comment: comments,
	}];

	return (
		<div
			style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
			className="p-3"
		>
			{/* Entire App Container */}
			<div
				style={{ maxWidth: "700px" }}
				className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
			>
				{
					me.map((x) => <PostOwner
						name={x.username}
						img={x.userImagePath}
						text={x.postText}
						like={x.likeNum}
						reply={x.comment}
					/>)
				}
			</div>
		</div>
	);
}