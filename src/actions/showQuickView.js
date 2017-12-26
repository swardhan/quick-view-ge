function showQuickView(index) {
    return {
        type: 'QUICK_VIEW',
        payload: {
            index
        }

    }
}

export default showQuickView;