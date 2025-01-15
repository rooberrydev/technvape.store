import AccessoriesImage from "@/images/accessories.jpg";
import ApparelImage from "@/images/apparel.jpg";

export const config = {
	categories: [
		{ name: "Laptop/PC Repair", slug: "laptoprepair", image: ApparelImage },
		{ name: "Vape Kits", slug: "vapekits", image: AccessoriesImage },
		{ name: "Nicotine Salts", slug: "nicotinesalts", image: AccessoriesImage },
		{ name: "Pods", slug: "pods", image: AccessoriesImage },
		{ name: "Disposable Vapes", slug: "disposables", image: AccessoriesImage },
	],

	social: {
		x: "https://x.com/yourstore",
		facebook: "https://facebook.com/yourstore",
	},

	contact: {
		email: "support@yourstore.com",
		phone: "+1 (555) 111-4567",
		address: "123 Store Street, City, Country",
	},
};

export type StoreConfig = typeof config;
export default config;
