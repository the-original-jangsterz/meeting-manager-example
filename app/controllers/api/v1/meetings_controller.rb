class Api::V1::MeetingsController < ApplicationController
  def index
    @meetings = Meeting.all
    render 'index.json.jbuilder'
  end

  def create
    @meeting = Meeting.new(
      name: params[:name],
      address: params[:address],
      start_time: params[:start_time],
      end_time: params[:end_time],
      notes: params[:notes]
    )
    if @meeting.save
      render 'show.json.jbuilder'
    else
      render json: { errors: @meeting.errors.full_messages }, status: 422
    end
  end
end
