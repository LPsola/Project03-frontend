import { NgModule } from "@angular/core";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzCollectionModule, MzCollapsibleModule, MzInputModule, MzModalModule} from 'ng2-materialize'

const mat_modules = [
    MzButtonModule,
    MzCollectionModule,
    MzCollapsibleModule,
    MzInputModule,
    MzModalModule
]
@NgModule({
    imports: [
        NoopAnimationsModule,
        mat_modules
    ],
    exports: mat_modules
})

export class MaterializeModule{}