import React from "react";
import Navbar from "../../components/group/Navbar/Navbar";
import Card from "@/components/common/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPersonality } from "@/redux/slices/personalityTypeSlice";
function Settings() {
	const personality = useAppSelector(
		(state) => state.personalityReducer.personality
	);
	const dispatch = useAppDispatch();
	return (
		<>
			<Navbar />
			<div className="flex flex-col h-full w-3/4 items-center justify-center m-auto">
				<Card>
					<div className="flex justify-center mb-10 items-center text-3xl gap-3">
						<FontAwesomeIcon icon={faGear} />
						<h1>Postavke</h1>
					</div>
					<h1 className="text-2xl text-left mb-10">
						Odaberite vaš psihološki profil:
					</h1>
					<div className="flex justify-between flex-col md:flex-row gap-5 ">
						<button
							onClick={() => {
								dispatch(getPersonality("Vizuelni"));
								console.log(personality);
							}}
						>
							<Card color="bg-white">
								<div className="flex gap-8 items-center flex-col">
									<div className="w-full">
										<h1>VIZUELNI TIP</h1>
										<div className="bg-black h-0.5 w-5/6 m-auto"></div>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Esse, odio. Magnam iure ducimus voluptates porro aliquid
										saepe delectus in, totam fuga voluptas cupiditate adipisci
										esse inventore placeat, a, officia non!
									</p>
								</div>
							</Card>
						</button>
						<button onClick={() => {
								dispatch(getPersonality("Audativni"));
								console.log(personality);
              
							}}>
							<Card color="bg-white">
								<div className="flex gap-8 items-center flex-col">
									<div className="w-full">
										<h1>AUDATIVNI TIP</h1>
										<div className="bg-black h-0.5 w-5/6 m-auto"></div>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Esse, odio. Magnam iure ducimus voluptates porro aliquid
										saepe delectus in, totam fuga voluptas cupiditate adipisci
										esse inventore placeat, a, officia non!
									</p>
								</div>
							</Card>
						</button>
						<button onClick={() => {
								dispatch(getPersonality("Kinestetički"));
								console.log(personality);
							}}>
							<Card color="bg-white">
								<div className="flex gap-8 items-center flex-col">
									<div className="w-full">
										<h1>KINESTETIČKI TIP</h1>
										<div className="bg-black h-0.5 w-5/6 m-auto"></div>
									</div>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Esse, odio. Magnam iure ducimus voluptates porro aliquid
										saepe delectus in, totam fuga voluptas cupiditate adipisci
										esse inventore placeat, a, officia non!
									</p>
								</div>
							</Card>
						</button>
					</div>
				</Card>
			</div>
		</>
	);
}

export default Settings;
