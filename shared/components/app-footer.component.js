const setup = () => {
  const year = new Date();
  const updated = '10/2022';

  return { year, updated };
};

const template = /* html */ `

<section class="container">
    <p> &copy; {{year.getFullYear()}} | Developed by: 
        <span> Agostinho Monteiro </span>
    </p>
    <p>Last update: {{updated}}</p>
    <p>Powered by: <a href="https://vuejs.org/" target="_blank" class="framework" title="visit VueJS"> Vue ( 3.2 ) </a> </p>
    <p>Icons by 
        <a href="https://icons.getbootstrap.com/" target="_blank" title="visit bootstrap icons">
          Bootstrap Icons
        </a>
    </p>
</section>
`;

export default { setup, template };
