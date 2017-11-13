import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'commentfilter'
})
export class CommentFilterPipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        if (items === undefined) {
            return items;
        }
        // Process filter arg
        const commentFilter = args[0];
        if (commentFilter == null) {
            return items;
        }
        // Perform filtering
        return items.filter(item => item.hasOwnProperty('tcomment')
            && item.tcomment.includes(commentFilter));
    }

}
