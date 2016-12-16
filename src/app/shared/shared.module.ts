import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NameListService } from './name-list/index';
import { TopNavComponent, SidebarComponent } from './index';
import { ToastComponent } from './toast/toast.component'

/**
* Do not specify providers for modules that might be imported by a lazy loaded module.
*/

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [TopNavComponent, SidebarComponent, ToastComponent],
    exports: [CommonModule, FormsModule, RouterModule, TopNavComponent, SidebarComponent, ToastComponent]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [NameListService]
        };
    }
}
