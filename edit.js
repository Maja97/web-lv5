class EditForm {
    constructor(form) {
        this.form = form;

    }

    init() {
        this._submitFormData(this.form);
        this._deleteFighter();
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

            fetch('controller/db/Edit.php', {
                method: 'post',
                body: data
            })
                .then(response => response.text())
                .then(response => {
                    /**
                     * If 200, reload the page
                     */
                   // location.reload();
                })
                .catch(error => alert(error));
        });
    }

    _deleteFighter(){
        const button = document.getElementById("delete");
        let id = localStorage.getItem("id");
        console.log(id);
        
        button.addEventListener("click", function(e){
            e.preventDefault();
            fetch('controller/db/Delete.php?id=' + id, {
                method: 'get',
            })
                .then(response => response.text())
                .then(response => {
                    /**
                     * If 200, reload the page
                     */
                   // location.reload();
                })
                .catch(error => alert(error));
        });
    }
}

const newForm = new EditForm("form");
newForm.init();