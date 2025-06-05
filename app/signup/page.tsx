"use client";

import { useState } from "react";
import Header from "@/components/header";
import Link from "next/link";
import axios from "axios";

export default function Signup() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		dateOfBirth: "",
		sex: "",
		postalCode: "",
		healthCardNumber: "",
		password: "",
		confirmPassword: "",
		acceptTerms: false,
	});
	const [samePass, setSamePass] = useState(false);
	const [errorReason, setErrorReason] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");	

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (formData.password == formData.confirmPassword) {
			setSamePass(true);
		} else {
			setSamePass(false);
		}
		if (!formData.acceptTerms) {
			setErrorReason(true);
			return;
		}

		try{
			const response = await axios.post("http://localhost:4000/api/auth/register", {
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				password: formData.password,
				dateOfBirth: formData.dateOfBirth,
				sex: formData.sex,
				postalCode: formData.postalCode,
				healthCardNumber: formData.healthCardNumber,
			},
		{
			withCredentials: true,
			headers: {
				"Content-Type": "application/json"
			}
		}
		
	);
	if(response.data.success){
		setSuccessMessage("Account created successfully!");
	}else{
		setErrorReason(true);
		console.error("Registration failed:", response.data.message);
	}
		} catch(error){
			console.error("Error during registration:", error);
			setErrorReason(true);
		}
	};

	return (
		<div className="min-h-screen bg-[#FFEAEA] text-blacktxt">
			<Header />
			<main className="max-w-md mx-auto pt-8 pb-16 px-4">
				<h1 className="text-3xl font-bold text-center mb-8">
					Create Your Account
				</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<p className="px-1">
							Legal First Name
							<span className="text-red-700">*</span>
						</p>
						<input
							type="text"
							placeholder="Legal First Name"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.firstName}
							onChange={(e) =>
								setFormData({
									...formData,
									firstName: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Legal Last Name
							<span className="text-red-700">*</span>
						</p>
						<input
							type="text"
							placeholder="Legal Last Name"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.lastName}
							onChange={(e) =>
								setFormData({
									...formData,
									lastName: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Email Address
							<span className="text-red-700">*</span>
						</p>
						<input
							type="email"
							placeholder="Email Address"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.email}
							onChange={(e) =>
								setFormData({
									...formData,
									email: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Date of Birth
							<span className="text-red-700">*</span>
						</p>

						<input
							type="date"
							placeholder="Date of Birth"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.dateOfBirth}
							onChange={(e) =>
								setFormData({
									...formData,
									dateOfBirth: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Sex
							<span className="text-red-700">*</span>
						</p>
						<select
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.sex}
							onChange={(e) =>
								setFormData({
									...formData,
									sex: e.target.value,
								})
							}
							required
						>
							<option value="">Select your sex</option>
							<option value="female">Female</option>
							<option value="male">Male</option>
							<option value="other">Other</option>
						</select>
					</div>
					<div>
						<p className="px-1">
							Postal Code
							<span className="text-red-700">*</span>
						</p>
						<input
							type="text"
							placeholder="Postal Code"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.postalCode}
							pattern="/^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i"
							maxLength={6}
							onChange={(e) =>
								setFormData({
									...formData,
									postalCode: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Health Card Number
							<span className="text-red-700">*</span>
						</p>
						<input
							type="text"
							placeholder="Health Card Number"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.healthCardNumber}
							onChange={(e) =>
								setFormData({
									...formData,
									healthCardNumber: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Password
							<span className="text-red-700">*</span>
						</p>
						<input
							type="password"
							placeholder="Password"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.password}
							onChange={(e) =>
								setFormData({
									...formData,
									password: e.target.value,
								})
							}
							required
						/>
					</div>
					<div>
						<p className="px-1">
							Confirm Password
							<span className="text-red-700">*</span>
						</p>
						<input
							type="password"
							placeholder="Confirm Password"
							className="w-full px-4 py-3 rounded-xl bg-white/50 border-1 border-[#B1A8A8]/50 focus:outline-none focus:border-accent2"
							value={formData.confirmPassword}
							onChange={(e) =>
								setFormData({
									...formData,
									confirmPassword: e.target.value,
								})
							}
							required
						/>
					</div>
					<div className="space-y-4">
						<label className="flex items-start space-x-2">
							<input
								type="checkbox"
								className="mt-1"
								checked={formData.acceptTerms}
								onChange={(e) =>
									setFormData({
										...formData,
										acceptTerms: e.target.checked,
									})
								}
								required
							/>
							<span className="text-sm text-gray-600">
								Hormone Fit can use my information to recommend
								relevant treatments and products.{" "}
								<Link
									href="/learn-more"
									className=" text-accent1 hover:text-accent2 transition-colors"
								>
									Learn more
								</Link>
							</span>
						</label>

						<div className="bg-accent2 outline-1 outline-accent1 rounded-xl px-3">
							Error: {}
						</div>

						<button
							type="submit"
							className="w-full py-3 px-4  text-white rounded-xl bg-accent1 hover:bg-accent2 transition-colors"
						>
							Continue
						</button>

						<p className="text-xs text-center text-gray-500">
							By clicking "Continue", you are agreeing to{" "}
							<Link
								href="/terms"
								className=" text-accent1 hover:text-accent2 transition-colors"
							>
								Terms of Use
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy"
								className=" text-accent1 hover:text-accent2 transition-colors"
							>
								Privacy Policy
							</Link>
							.
						</p>

						<p className="text-xs text-center text-gray-500">
							Hormone Fit intake assessments do not constitute
							medical care. A Felix healthcare practitioner will
							be assigned to you after submission to approve your
							treatment.
						</p>
					</div>
				</form>
			</main>
		</div>
	);
}
