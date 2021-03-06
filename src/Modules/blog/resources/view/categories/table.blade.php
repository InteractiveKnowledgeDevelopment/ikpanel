<table id="blogCategoryTable"
       class="table table-valign table-condensed"
       cellspacing="0"
       width="100%">
	<thead>
	<tr>
		<th class="text-center" style="width: 10px;"><i class="fas fa-sort"></i></th>
		<th>
			{{ __('ikpanel-blog::blog.categories.show.table.name') }}
		</th>
		<th>
		</th>
	</tr>
	</thead>
	<tbody>
	@foreach($categories as $cat)
		<tr>
			<td class="text-center handle" style="padding: 0 !important;cursor: move;">
				<i class="fa fa-ellipsis-v fa-fw"></i>
			</td>
			<td>
				{{ $cat->name }}
			</td>
			<td style="text-align: right">
				@if(is_null($cat->deleted_at))
					<div class="btn-group" role="group" aria-label="edit-category">
						@can('blog-categories.update')
							<a href="{{admin_url('/mod/blog/categories/edit/' . $cat->id)}}"
							   class="btn btn-info btn-sm">
								{{ __('ikpanel-blog::blog.categories.show.buttons.actionEdit') }}
							</a>
						@endcan
						@can('blog-categories.delete')
							<button type="button" class="btn btn-sm btn-danger action-delete" data-id="{{$cat->id}}">
								{{ __('ikpanel-blog::blog.categories.show.buttons.actionDelete') }}
							</button>
						@endcan
					</div>
				@else
					@can('blog-categories.restore')
						<button class="btn btn-success btn-sm action-restore" style="min-width: 110px;"
						        data-id="{{ $cat->id }}">
							<i class="fas fa-undo-alt fa-fw"></i>
							{{ __('ikpanel-blog::blog.categories.show.buttons.actionRestore') }}
						</button>
					@endcan
				@endif
			</td>
		</tr>
	@endforeach
	</tbody>
</table>
