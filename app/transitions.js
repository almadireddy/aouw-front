export default function(){
  this.transition(
    this.hasClass('liquid-dialog-container'),
    this.use('fade', {duration: 500})
  );
  this.transition(
    this.fromRoute('index'),
    this.toRoute('archive'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
