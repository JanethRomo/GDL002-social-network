let wallTemplate = `
<nav>
<p id='saludo'></p>
<button>Perfil</button>
<button id='logout'>Cerrar sesión</button>
</nav>

<section id='wall'>
<form id='submit-post'>
<textarea class='post-area' name='comment' placeholder='escribe aqui' required></textarea>

<button id='publish'>publicar</button>
</form>

<div id='post-list'>

</div>
</section>
`;

export default wallTemplate;
