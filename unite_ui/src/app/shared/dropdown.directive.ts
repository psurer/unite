import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    /* we define how we can add our directive with our attribute selector
   and therefor we encole the name is square brackets*/
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.containt(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {

    }
}