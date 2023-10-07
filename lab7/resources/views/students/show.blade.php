@extends('students.layout')
@section('content')
<div class="card" style="margin:20px">
    <div class="card-header">Сурагч харах</div>
    <div class="card-body">
        <div class="card-body">
        <h5 class="card-title">Нэр : {{ $students->name }}</h5>
        <p class-text> Гэрийн хаяг : {{$students->address}}</p>
        <p class-text> Утасны дугаар : {{$students->Utas}}</p>
    </div>
    <hr/>
</div>
</div>
@stop
