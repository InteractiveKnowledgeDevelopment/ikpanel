<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->increments('id');
	        $table->integer('userid');
	        $table->ipAddress('ip')->nullable();
            $table->timestamp('date')->useCurrent();
	        $table->string('action');
	        $table->enum('type', [
		        'INFO',
		        'SUCCESS',
		        'WARNING',
		        'DANGER',
		        'ERROR'
	        ])->default('INFO');
	
	        $table->foreign('userid')
		        ->references('id')
		        ->on('users')
		        ->onUpdate('RESTRICT')
		        ->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    	Schema::table('logs',function(Blueprint $table){
    		$table->dropForeign('logs_userid_foreign');
	    });
    	
        Schema::dropIfExists('logs');
    }
}