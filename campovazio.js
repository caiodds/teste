const mostra = document.getElementById('mostrar')
const nome = document.getElementById('nome')
const senha = document.getElementById('senha')


function google() {
    Swal.fire(
        'Abrindo google aguarde',
        'Caso não abra tenta fechar e abrir novamente',
        'info',
    );
}

function campos() {
    if (nome.value == "" || senha.value == "") {
        Swal.fire(
            'Campos vazios!',
            'Preencha os campos',
            'error'
        );
        setTimeout(() => {
            mostra.innerHTML = ''
        }, 1000);
    } else {
        Swal.fire({
            title: 'Deseja salvar seu login?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Salvar',
            denyButtonText: `Não salvar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Salvado com sucesso!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Login não foi salvo!', '', 'info')
            }
        })
    }
}
function esqueceusenha() {
    Swal.fire({
        title: 'Esqueci minha senha',
        html: `<input type="email" id="login" class="swal2-input" placeholder="Digite seu email">`,
        confirmButtonText:  'Enviar email',
        focusConfirm: false,
        preConfirm: () => {
            const login = Swal.getPopup().querySelector('#login').value
            if (!login) {
                Swal.showValidationMessage(`Digite um email valido`)
            }
            return { login: login }
        }
    }).then((result) => {
        Swal.fire(`
          Seu email: ${result.value.login}
        `.trim())
        Swal.fire('Email enviado com sucesso!', '', 'success')
    })

}