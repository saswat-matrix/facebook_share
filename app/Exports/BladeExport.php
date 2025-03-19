<?php

namespace App\Exports;

use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class BladeExport implements WithStyles, ShouldAutoSize, FromView
{
    private $data;
    private $fileName;
 
    public function __construct($data, $title = NULL, $subheader = NULL)
    {
        $this->data = $data;
        if($subheader !== NULL) {
            $this->subheader = $subheader;
        }
        if($title !== NULL) {
            $this->title = $title;
        }
    }

    public function styles(Worksheet $sheet)
    {
        return [
            // Style the first row as bold text.
            2    => ['font' => ['bold' => true]],
        ];
    }
 
    public function view(): View
    {
        $exportData['data'] = $this->data;
        if(isset($this->title) && !empty($this->title)) {
            $exportData['title'] = $this->title;
        }
        if(isset($this->subheader) && !empty($this->subheader)) {
            $exportData['subheader'] = $this->subheader;
        }
        return view('exports.xml', $exportData);
    }
}
