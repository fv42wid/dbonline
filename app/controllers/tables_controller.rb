class TablesController < ApplicationController

  def index


  end

  def new

    #TODO add error checking for file upload

  end

  def create

    #read loaded file
    loaded_file = params[:file].tempfile
    file_text = File.read(loaded_file)

    #split file into header and record arrays
    #TODO handle case where there is no header row
    #TODO show loader progress, then replace with table
    # add the progress bar via jquery
    # move the table code in the view into a partial
    # create a new function in the table controller to parse the file
    # make $.ajax call to the new parser function
    # on success: replace the progress bar with html returned by the partial

    #hold value in @parse_progress to update progress bar
    @parse_progress = 40
    @records = file_text.split("\n")
    header = @records[0]
    @headers = header.split("|")
    @records.delete_at(0)

  end

  def parse_file
    #this function will contain parsing code
    #this will be called by ajax

  end

end