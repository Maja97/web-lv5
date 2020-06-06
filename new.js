class NewForm {
    constructor(form) {
        this.form = form;
    }

    init() {
        this._submitFormData(this.form);
    }

    _submitFormData(selector) {
        const myForm = document.querySelector(selector);

        myForm.addEventListener("submit", function (e) {
            e.preventDefault();
 /**
             * https://developer.mozilla.org/en-US/docs/Web/API/FormData
             * @type {FormData}
             */
            const data = new FormData(this);

            fetch('controller/db/Insert.php', {
                method: 'post',
                body: data
            })
                .then(response => response.text())
                .then(response => {
                    /**
                     * If 200, reload the page
                     */
                    location.reload();
                })
                .catch(error => alert(error));
        });
        
    }
}

const newForm = new NewForm("form");
newForm.init();