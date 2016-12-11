import { Component, Input } from '@angular/core';
import { Response } from '@angular/http';

import { AuthResponse } from '../auth.model';

@Component({
    selector: 'output',
    templateUrl: 'app/users/shared/output/output.component.html'
})

export class OutputComponent {
    private _output: AuthResponse;

    @Input()
    set data(res: Response) {

        this._output = <AuthResponse>{};

        if (res != null) {
            this._output.status = res.statusText + ' (' + res.status + ')';

            if (res.json().errors != null)
                if (res.json().errors.full_messages != null)
                    this._output.errors = res.json().errors.full_messages;
                else
                    this._output.errors = res.json().errors;
            else
                this._output.data   = res.json().data;
        }
    }
}
