import Highway from '@dogstudio/Highway';
import {TimelineLite} from 'gsap';


class Fade extends Highway.Transition{
  in({from, to, done}) {
    const tl = new TimelineLite();
    tl.fromTo(to, 0.5, {left: '-100%', top: '50%'}, {left: '0%'})
    .fromTo(
      to,
      0.5,
      {height: '2vh'},
      {height: '90vh', top : '10%', onComplete: function(){
        from.remove();
        done();
      }}
    )
  .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
  }
  out({from, done}) {
    done();
  }
}

export default Fade;
