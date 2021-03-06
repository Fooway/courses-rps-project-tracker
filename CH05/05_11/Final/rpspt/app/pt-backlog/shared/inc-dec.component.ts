import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'inc-dec',
    templateUrl: 'inc-dec.component.html',
    styleUrls: ['inc-dec.component.css']
})
export class IncDecComponent {

    @Output() notifyIncDecTapped: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() decEnabled: boolean = true;
    @Input() incEnabled: boolean = true;

    public decTap() {
        //Emit event
        this.notifyIncDecTapped.emit(false);
    }

    public incTap() {
        //Emit event
        this.notifyIncDecTapped.emit(true);
    }
}

