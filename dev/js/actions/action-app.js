const changeView = (view) => {
    console.log("You activated view: ", view.key);
    return {
        type: 'APP_CHANGE_VIEW',
        data: view
    }
};
