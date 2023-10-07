
@extends('students.layout')
@section('content')

<div class="card" style="margin:20px;">
  <div class="card-header">Сурагч Засах</div>
  <div class="card-body">

      <form action="{{ url('student/' .$students->id) }}" method="post">
        {!! csrf_field() !!}
        @method("PATCH")
        <input type="hidden" name="id" id="id" value="{{$students->id}}" id="id" />
        <label>Нэр</label></br>
        <input type="text" name="name" id="name" value="{{$students->name}}" class="form-control"></br>
        <label>Гэрийн хаяг</label></br>
        <input type="text" name="address" id="address" value="{{$students->address}}" class="form-control"></br>
        <label>Утас</label></br>
        <input type="text" name="Utas" id="Utas" value="{{$students->Utas}}" class="form-control"></br>
        <input type="submit" value="Update" class="btn btn-success"></br>
    </form>

  </div>
</div>

@stop
