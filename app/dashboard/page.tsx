import CatchUp from "@/components/catchUp";

export default function Dashboard() {
	return (
		<div className="bg-whitetxt w-full h-[100vh] flex flex-row text-blacktxt overflow-clip">
			<div className="h-full w-[0.5%] bg-[rgb(231,122,122)]"></div>
			<div className="flex flex-col pt-10 bg-[#FFEAEA] w-[19%] ">
				<h3 className="font-bold text-3xl mb-8 text-center">Hormone Fit</h3>
				<div className="flex-col flex items-start w-full font-bold gap-y-3">
					<div className="pl-[10%]  flex flex-row  items-center gap-x-3 w-full py-3 bg-[#FFD3D3]">
						<img src="pink_icons/home.svg" className="w-[2vw]" alt="" />
						Dashboard
					</div>
					<div className="pl-[10%] flex flex-row  items-center gap-x-3 w-full py-3">
						<img src="pink_icons/mail.svg" className="w-[2vw]" alt="" />
						Inbox
					</div>
					<div className="pl-[10%] flex flex-row  items-center gap-x-3 w-full py-3">
						<img src="pink_icons/heart.svg" className="w-[2vw]" alt="" />
						Health Info
					</div>
					<div className="pl-[10%]  flex flex-row  items-center gap-x-3 w-full py-3">
						<img
							src="pink_icons/user.svg"
							className="w-[2vw] aspect-square"
							alt=""
						/>
						Consultations
					</div>
					<div className="pl-[10%]  flex flex-row  items-center gap-x-3 w-full py-3">
						<img src="pink_icons/multiUser.svg" className="w-[2vw]" alt="" />
						Profiles
					</div>
					<div className="pl-[10%] flex flex-row  items-center gap-x-3 w-full py-3">
						Setting
					</div>
				</div>
			</div>
			<CatchUp />
		</div>
	);
}
