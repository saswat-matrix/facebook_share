@if ($paginator->hasPages())
    <nav aria-label="Page navigation">
        <ul class="pagination pagination-square pagination-primary">
            {{-- Previous Page Link --}}
            @if ($paginator->onFirstPage())
                <li class="page-item prev disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                    <a href="javascript:void(0);" class="page-link"><i class="tf-icon bx bx-chevron-left"></i></a>
                </li>
            @else
                <li class="page-item prev">
                    <a href="{{ $paginator->previousPageUrl() }}" class="page-link" rel="prev" aria-label="@lang('pagination.previous')"><i class="tf-icon bx bx-chevron-left"></i></a>
                </li>
            @endif

            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <li class="page-item disabled" aria-disabled="true"><a href="javascript:void(0);" class="page-link">{{ $element }}</a></li>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <li class="page-item active" aria-current="page"><a href="javascript:void(0);" class="page-link">{{ $page }}</a></li>
                        @else
                            <li class="page-item"><a href="{{ $url }}" class="page-link">{{ $page }}</a></li>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next Page Link --}}
            @if ($paginator->hasMorePages())
                <li class="page-item next">
                    <a href="{{ $paginator->nextPageUrl() }}" class="page-link" rel="next" aria-label="@lang('pagination.next')"><i class="tf-icon bx bx-chevron-right"></i></a>
                </li>
            @else
                <li class="page-item next disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                    <a href="javascript:void(0);" class="page-link"><i class="tf-icon bx bx-chevron-right"></i></a>
                </li>
            @endif
        </ul>
    </nav>
@endif