function showQuickView(products, index) {
    return {
        type: 'QUICK_VIEW',
        payload: {
            index,
            products
        }

    }
}

export default showQuickView;