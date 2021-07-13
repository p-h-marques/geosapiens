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
    }
}

export default locators