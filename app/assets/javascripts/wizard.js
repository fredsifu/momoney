class Wizard {
    constructor(form, tabs, indicators, progressBar, btnNext, btnPrevious, btnSubmit) {
        this.form = form;
        this.tabs = tabs;
        this.indicators = indicators;
        this.progressBar = progressBar;
        this.currentTab = 0;
        this.tabCount = this.tabs.length;
        this.btnNext = btnNext;
        this.btnPrevious = btnPrevious;
        this.btnSubmit = btnSubmit;

        if (this.btnNext){
            // Learning point:
            // in ECMAScript 6 and jquery, the "this" context on bind also has to be bound on the method called.
            this.btnNext.bind("click", this.next.bind(this));
        }
        if (this.btnPrevious) {
            this.btnPrevious.bind("click", this.previous.bind(this));
        }
        if (this.btnSubmit) {
            this.btnSubmit.bind("click", this.submit.bind(this));
        }

        if (this.form) {
            this.form.find('input').on('input', this.resetInvalidStatus);
            this.form.find('textarea').on('input', this.resetInvalidStatus);
            this.form.find('select').on('change', this.resetInvalidStatus);
        }

        this.updateCurrentTab();
    }

    get progress() {
        let p = parseFloat((this.currentTab + 1).toString()) * parseFloat("100") / parseFloat(this.tabCount.toString());
        return p;
    }

    updateProgressBar(p) {
        if (this.progressBar) {
            this.progressBar.attr('aria-valuenow', p * 100).css('width', p + '%');
        }
    }

    validateStep() {
        let valid = true;
        let inputs = this.tabs.eq(this.currentTab).find("input, select, textarea");//.filter('[required]:visible');
        inputs.each(function () {
            if (!$(this).valid()) { // uses jquery.validation.js : https://jqueryvalidation.org/documentation/
                valid = false;
            }
        });
        return valid;
    }

    resetInvalidStatus() {
        $(this).removeClass('is-invalid');
    }

    updateButtonsVisibility() {
        if (this.currentTab === 0) {
            this.btnPrevious.hide();
        }
        else {
            this.btnPrevious.show();
        }

        if (this.currentTab === this.tabCount - 1) {
            this.btnSubmit.show();
            this.btnNext.hide();
        } else {
            this.btnSubmit.hide();
            this.btnNext.show();
        }
    }

    next() {
        if (!this.validateStep()) {
            return false;
        }

        this.currentTab++;
        if (this.currentTab >= this.tabCount - 1) {
            // Normalize current tab
            this.currentTab = this.tabCount - 1;
        }

        this.updateCurrentTab();
    }

    previous() {
        this.currentTab--;
        if (this.currentTab <= 0) {
            // Normalize current tab
            this.currentTab = 0;
        }

        this.updateCurrentTab();
    }

    updateCurrentTab() {
        this.updateProgressBar(this.progress);
        this.updateButtonsVisibility();

        this.tabs.hide();
        this.tabs.eq(this.currentTab).show();
    }

    updateStepIndicators() {
        // This function removes the "active" class of all steps...
        this.indicators.removeClass('active');
        this.indicators.eq(this.currentTab).addClass('active');
    }

    submit() {
        // Submit on last step only
        if (this.currentTab >= this.tabCount - 1) {
            // Normalize current tab
            this.currentTab = this.tabCount - 1;
        }
        else {
            return false;
        }

        if (!this.validateStep()) {
            return false;
        }

        this.tabs.hide();

        this.btnPrevious.hide();
        this.btnNext.hide();
        this.btnSubmit.hide();
        this.form.submit();
    }
}
