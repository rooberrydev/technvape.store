"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type ModalProps = {
	title: string;
	text: string;
	confirmText?: string;
	cancelText?: string;
	confirmAction?: () => void;
	cancelAction?: () => void;
	redirectOnCancel?: boolean;
	allowDialogDismiss?: boolean;
};

export function Modal({
	title,
	text,
	confirmText,
	cancelText,
	confirmAction,
	cancelAction,
	redirectOnCancel = false,
	allowDialogDismiss = true,
}: ModalProps) {
	const router = useRouter();

	const modal = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		modal.current?.showModal();
	}, []);

	const handleKeyDown = (e) => {
		if (e.key !== "Escape") return;
		if (!allowDialogDismiss) e.preventDefault();
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [allowDialogDismiss]);

	return (
		<dialog id="my_modal_2" className="modal" ref={modal}>
			<div className="modal-box">
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="py-4">{text}</p>
				<form method="dialog" className="modal-backdrop">
					<div className="modal-action">
						<button
							className="btn btn-primary"
							onClick={() => {
								confirmAction?.();
								modal.current?.close();
							}}
						>
							{confirmText}
						</button>
						{cancelText && (
							<button
								className="btn"
								onClick={() => {
									cancelAction?.();
									redirectOnCancel && router.push("https://google.com");
									modal.current?.close();
								}}
							>
								{cancelText}
							</button>
						)}
					</div>
				</form>
			</div>
		</dialog>
	);
}
