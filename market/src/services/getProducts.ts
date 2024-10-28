export default async function useGetProducts() {
    try {
        const response = await fetch('http://localhost:5000/api/products');
        const products = await response.json();

        return [products, null]
    } catch (error: any) {
        switch (error.message) {
            case 'Failed to fetch':
                return [null, '500']
            default:
                return [null, error.message]
        }
    }
}