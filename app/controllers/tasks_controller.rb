class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.save
    redirect_to action: :index
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      redirect_to action: :index
    else
      render 'edit', status: unprocessable_entry
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    redirect_to action: :index, status: :see_other
  end

  private
  def task_params
    params.require(:task).permit(:title)
  end
end
