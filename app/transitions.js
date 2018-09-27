export default function(){
  this.transition(
    this.hasClass('liquid-dialog-container'),
    this.use('fade', {duration: 500})
  );
}
