class ImagingsController < ApplicationController
  before_action :set_imaging, only: [:show, :update, :destroy]

  # GET /imagings
  def index
    @imagings = Imaging.all

    render json: @imagings
  end

  # GET /imagings/1
  def show
    render json: @imaging
  end

  # POST /imagings
  def create
    @imaging = Imaging.new(imaging_params)

    if @imaging.save
      render json: @imaging, status: :created, location: @imaging
    else
      render json: @imaging.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /imagings/1
  def update
    if @imaging.update(imaging_params)
      render json: @imaging
    else
      render json: @imaging.errors, status: :unprocessable_entity
    end
  end

  # DELETE /imagings/1
  def destroy
    @imaging.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_imaging
      @imaging = Imaging.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def imaging_params
      params.require(:imaging).permit(:sent, :facility, :scheduled, :completed, :attempts_to_receive, :received, :areas)
    end
end
