@extends('students.layout')
@section('content')
<div class="card" style="margin:20px">
    <div class="card-header">Шинэ бүртгэл үүсгэх</div>
    <div class="card-body">
        <form action="{{ url('student') }}" method="post">
            {!!  csrf_field() !!}
            <label>Нэр</label><br/>
            <input type="text" name="name" id="name" class="form-control"><br/>
            <label >Гэрийн хаяг</label><br/>
            <input type="text" name="address" id ="address" class="form-control"><br/>
            <label>Утасны дугаар</label><br/>
            <input type="text" name="Utas" id="Utas" class="form-control"><br/>
            <input type="submit" value="Save" class="btn btn-success"><br/>
        </form>
    </div>
</div>
@stop
