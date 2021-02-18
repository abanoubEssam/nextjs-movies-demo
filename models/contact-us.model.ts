export interface ContactMessageBody {
	name: string;
	email: string;
	description?: string;
}

export interface SendContactRes {
	email: string;
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	id: string;
}
