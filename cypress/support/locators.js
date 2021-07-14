const locators = {
    links: {
        insert: '[data-test=nav_link_0]',
        read: '[data-test=nav_link_1]',
    },
    formInfos: {
        title: '[data-test=form-title-name]',
        status: '[data-test=form-title-status]',
        tracking: '[data-test=form-title-tracking]',
        public: '[data-test=form-title-public]',
    },
    formBlocks: {
        textField: '[data-test=form-block-textfield]',
        checkboxField: '[data-test=form-block-checkboxfield]',
        ratingField: '[data-test=form-block-ratingfield]',
        ratingFieldText: '[data-test=form-block-ratingfield] span.feedback',
        dateField: '[data-test=form-block-datefield]',
        dateFieldPopup: '.react-datepicker__tab-loop',
        urlField: '[data-test=form-block-urlfield]',
        clearButton: '[data-test=button-clear]',
        sendButton: '[data-test=button-send]',
        footer: '[data-test=footer]',
    },
    feedbacks: {
        loading: '[data-test=request-loading]',
        error: '[data-test=request-error]',
        success: '[data-test=request-sending]',
        successButton: '[data-test=button-return]'
    },
    actions: {
        clear: '[data-test=button-clear]',
        apply: '[data-test=button-send]',
        return: '[data-test=button-return]'
    }
}

export default locators